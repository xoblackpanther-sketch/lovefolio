import React, { useCallback, useEffect, useMemo, useState } from "react";
import { EDITOR } from "@/constants/testIds";
import { Link } from "react-router-dom";
import { ArrowLeft, Save, RotateCcw, Eye, PenLine } from "lucide-react";
import FieldRenderer from "@/editor/FieldRenderer";
import TemplateRenderer from "@/components/TemplateRenderer";

const DRAFT_KEY = (slug, siteId) => `lws:draft:${slug}:${siteId || "demo"}`;

/**
 * TemplateEditor
 * --------------
 * Schema-driven visual editor. Fully generic — reuses across any template.
 */
export default function TemplateEditor({ templateEntry, siteId = "demo" }) {
    const { config } = templateEntry;
    const slug = config.slug;

    const initialContent = useMemo(() => {
        try {
            const raw = localStorage.getItem(DRAFT_KEY(slug, siteId));
            if (raw) {
                const parsed = JSON.parse(raw);
                return stripDeadLocalObjects(parsed);
            }
        } catch {
            /* ignore */
        }
        return structuredClone(config.demoData || {});
    }, [slug, siteId, config.demoData]);

    const [content, setContent] = useState(initialContent);
    const [mobileMode, setMobileMode] = useState("edit");
    const [savedAt, setSavedAt] = useState(null);

    const updateField = useCallback((key, value) => {
        setContent((prev) => ({ ...prev, [key]: value }));
    }, []);

    // Wrapped in useCallback to prevent unneeded re-renders and fix ESLint missing dependency error
    const save = useCallback(() => {
        try {
            const cleaned = stripLocalObjectsForStorage(content);
            localStorage.setItem(DRAFT_KEY(slug, siteId), JSON.stringify(cleaned));
            setSavedAt(new Date());
        } catch (e) {
            console.error("Draft save failed", e);
        }
    }, [content, slug, siteId]);

    const reset = () => {
        if (!window.confirm("Reset all fields to the template's demo content?"))
            return;
        setContent(structuredClone(config.demoData || {}));
        try {
            localStorage.removeItem(DRAFT_KEY(slug, siteId));
        } catch {
            /* ignore */
        }
        setSavedAt(null);
    };

    // Keyboard shortcut: ⌘/Ctrl + S
    useEffect(() => {
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
                e.preventDefault();
                save();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [save]); // Added 'save' dependency here

    return (
        <div data-testid={EDITOR.root} className="min-h-[calc(100vh-72px)]">
            {/* Toolbar */}
            <div className="border-b border-[color:var(--lws-border)] bg-[color:var(--lws-bg-2)] sticky top-[72px] z-30">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-3">
                    <Link
                        to="/dashboard"
                        data-testid={EDITOR.exitBtn}
                        className="lws-btn-ghost text-xs"
                    >
                        <ArrowLeft size={14} /> Exit
                    </Link>
                    <div className="flex-1 min-w-0">
                        <div className="text-xs uppercase tracking-widest text-[color:var(--lws-text-dim)]">
                            Editing template
                        </div>
                        <div className="font-display text-lg lws-gradient-text truncate">
                            {config.name}
                        </div>
                    </div>

                    {/* Mobile tabs */}
                    <div className="md:hidden flex gap-1 border border-[color:var(--lws-border-strong)] rounded-full p-1">
                        <button
                            type="button"
                            data-testid={EDITOR.tabsEdit}
                            onClick={() => setMobileMode("edit")}
                            className={`text-xs px-3 py-1.5 rounded-full flex items-center gap-1 ${
                                mobileMode === "edit"
                                    ? "bg-[color:var(--lws-pink)] text-[#2a0714]"
                                    : "text-[color:var(--lws-text-muted)]"
                            }`}
                        >
                            <PenLine size={12} /> Edit
                        </button>
                        <button
                            type="button"
                            data-testid={EDITOR.tabsPreview}
                            onClick={() => setMobileMode("preview")}
                            className={`text-xs px-3 py-1.5 rounded-full flex items-center gap-1 ${
                                mobileMode === "preview"
                                    ? "bg-[color:var(--lws-pink)] text-[#2a0714]"
                                    : "text-[color:var(--lws-text-muted)]"
                            }`}
                        >
                            <Eye size={12} /> Preview
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={reset}
                        data-testid={EDITOR.resetBtn}
                        className="lws-btn-ghost text-xs"
                    >
                        <RotateCcw size={14} />
                        <span className="hidden md:inline">Reset</span>
                    </button>
                    <button
                        type="button"
                        onClick={save}
                        data-testid={EDITOR.saveBtn}
                        className="lws-btn-primary text-xs"
                    >
                        <Save size={14} /> Save
                    </button>
                </div>
                {savedAt && (
                    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-2 text-[11px] text-[color:var(--lws-text-dim)]">
                        Draft saved locally · {savedAt.toLocaleTimeString()}
                    </div>
                )}
            </div>

            <div className="max-w-[110rem] mx-auto grid md:grid-cols-[420px_1fr] lg:grid-cols-[460px_1fr]">
                {/* Fields */}
                <aside
                    data-testid={EDITOR.fieldsPanel}
                    className={`border-r border-[color:var(--lws-border)] p-4 md:p-6 space-y-6 max-h-[calc(100vh-140px)] overflow-y-auto ${
                        mobileMode === "edit" ? "block" : "hidden md:block"
                    }`}
                >
                    {(config.editableSchema || []).map((field) => (
                        <FieldRenderer
                            key={field.key}
                            field={field}
                            value={content[field.key]}
                            onChange={(v) => updateField(field.key, v)}
                        />
                    ))}
                    {(!config.editableSchema ||
                        config.editableSchema.length === 0) && (
                        <p className="text-sm text-[color:var(--lws-text-muted)]">
                            This template has no editable fields.
                        </p>
                    )}
                </aside>

                {/* Preview */}
                <section
                    data-testid={EDITOR.previewFrame}
                    className={`min-h-[calc(100vh-140px)] max-h-[calc(100vh-140px)] overflow-y-auto ${
                        mobileMode === "preview" ? "block" : "hidden md:block"
                    }`}
                >
                    <TemplateRenderer templateSlug={slug} content={content} />
                </section>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------ */
/* Helpers                                                      */
/* ------------------------------------------------------------ */

function isLocalObjectURL(v) {
    return v && typeof v === "object" && v.kind === "local";
}

function stripLocalObjectsForStorage(node) {
    if (Array.isArray(node)) return node.map(stripLocalObjectsForStorage);
    if (node && typeof node === "object") {
        if (isLocalObjectURL(node)) return null;
        const out = {};
        for (const [k, v] of Object.entries(node)) {
            out[k] = stripLocalObjectsForStorage(v);
        }
        return out;
    }
    return node;
}

function stripDeadLocalObjects(node) {
    if (Array.isArray(node)) return node.map(stripDeadLocalObjects);
    if (node && typeof node === "object") {
        if (isLocalObjectURL(node)) return null;
        const out = {};
        for (const [k, v] of Object.entries(node)) {
            out[k] = stripDeadLocalObjects(v);
        }
        return out;
    }
    return node;
}