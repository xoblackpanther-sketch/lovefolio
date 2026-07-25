import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import TemplateEditor from "@/editor/TemplateEditor";
import { getTemplate } from "@/data/templateRegistry";
import { Send, X, Sparkles } from "lucide-react";

export default function EditorPage() {
    const { slug } = useParams();
    const entry = getTemplate(slug);
    const [showPayModal, setShowPayModal] = useState(false);

    if (!entry || entry.comingSoon || !entry.component) {
        return (
            <div className="max-w-2xl mx-auto text-center py-32 px-6">
                <div className="lws-pill mb-6">Editor unavailable</div>
                <h1 className="font-display text-4xl md:text-5xl mb-4 lws-gradient-text">
                    This template isn&apos;t ready to edit
                </h1>
                <p className="text-[color:var(--lws-text-muted)] mb-8">
                    Pick a shippable template to open the visual editor.
                </p>
                <Link to="/templates" className="lws-btn-primary">
                    Browse templates
                </Link>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen">
            {/* Top Quick Action Bar */}
            <div className="bg-[#181114]/90 backdrop-blur-md border-b border-white/10 px-6 py-2.5 flex items-center justify-between sticky top-0 z-40">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-[color:var(--lws-text-muted)] hidden sm:inline">
                        Editing Template:
                    </span>
                    <span className="text-xs font-semibold text-pink-300">
                        {entry.config?.name || slug}
                    </span>
                </div>
                <button
                    onClick={() => setShowPayModal(true)}
                    className="lws-btn-primary text-xs py-1.5 px-4 flex items-center gap-1.5"
                >
                    <Send size={13} /> Publish & Get Live Link
                </button>
            </div>

            {/* Visual Editor */}
            <TemplateEditor templateEntry={entry} />

            {/* ORDER & PAYMENT MODAL */}
            {showPayModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-[#181114] border border-pink-500/30 rounded-2xl p-6 max-w-md w-full text-center relative shadow-2xl">
                        <button
                            onClick={() => setShowPayModal(false)}
                            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>

                        <span className="text-3xl mb-2 block">🎁</span>
                        <h3 className="font-display text-2xl text-white mb-2">
                            Publish Your Website
                        </h3>
                        <p className="text-neutral-400 text-sm mb-4">
                            Send your customized details to get your private, shareable live link delivered in 15 minutes!
                        </p>

                        <div className="bg-black/50 border border-white/10 rounded-xl p-4 mb-5 text-left">
                            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1.5 font-semibold">
                                How to order:
                            </p>
                            <ol className="text-xs text-neutral-300 space-y-1.5 list-decimal list-inside leading-relaxed">
                                <li>Click the email button below to submit your details.</li>
                                <li>Pay via UPI / Card when we confirm your design details.</li>
                                <li>Receive your custom private live link!</li>
                            </ol>
                        </div>

                        <a
                            href={`mailto:lovewebsitestudio@gmail.com?subject=Order%20Request%20-%20${encodeURIComponent(entry.config?.name || slug)}&body=Hi%20Love%20Website%20Studio!%0A%0AI%20have%20customized%20my%20website%20template%20(${slug})%20and%20would%20like%20to%20publish%20it.%0A%0APlease%20share%20the%20payment%20details%20and%20deliver%20my%20live%20link.%0A%0AThank%20you!`}
                            className="w-full lws-btn-primary py-3 flex items-center justify-center gap-2 text-sm font-semibold"
                        >
                            <Send size={15} /> Email Order Request & Get Link
                        </a>

                        <p className="text-[10px] text-neutral-500 mt-3">
                            Direct Support: lovewebsitestudio@gmail.com
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}