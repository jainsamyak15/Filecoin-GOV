"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { GooeyMarquee } from "@/components/ui/gooey-marquee";
import {
  FileText,
  Users,
  Zap,
  Shield,
  Download,
  Palette,
  Moon,
  Sun,
  ArrowRight,
  CheckCircle,
  Star,
  MessageSquare,
  BookOpen,
  BarChart3,
  TrendingUp,
  Globe,
  Cpu,
  Lock,
  Database,
  Bot,
  Network,
  DollarSign,
  Target,
  Award,
  Building2,
  Briefcase,
  Code,
  Eye,
  ChevronRight,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";

export default function FilecoinGovLandingPage() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setToast({ message: 'Please fill in all fields', type: 'error' });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setToast({ message: 'Successfully joined the waitlist!', type: 'success' });
      setShowWaitlistModal(false);
      setFormData({ name: '', email: '' });

      // Clear toast after 3 seconds
      setTimeout(() => setToast(null), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fluid Blob Background */}
        <div className="absolute inset-0 opacity-20">
          <LavaLamp />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-full px-4 py-2 text-sm font-medium text-orange-700 dark:text-orange-300 mb-8">
            <Sparkles className="w-4 h-4" />
            Enterprise-grade data governance platform
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Infrastructure to grow
            <br />
            <span className="text-orange-600 dark:text-orange-400">your data governance</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The first decentralized enterprise governance platform is coming. Join the waitlist to be among the first to transform your data infrastructure.
          </p>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">70%</div>
              <div className="text-slate-600 dark:text-slate-300">Cost reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">99.9%</div>
              <div className="text-slate-600 dark:text-slate-300">Compliance uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">15+</div>
              <div className="text-slate-600 dark:text-slate-300">Frameworks supported</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => setShowWaitlistModal(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-medium rounded-md shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-orange-950/20 dark:via-slate-900 dark:to-orange-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              A fully integrated suite of governance products
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Reduce costs, improve compliance, and run your data governance more efficiently on a fully integrated, AI-powered platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Core Features Grid */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI Governance Engine</h3>
                    <p className="text-slate-600 dark:text-slate-300">Automated policy management and compliance monitoring with intelligent risk assessment</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Decentralized Storage</h3>
                    <p className="text-slate-600 dark:text-slate-300">Cost-optimized data placement with Filecoin integration and cryptographic verification</p>
                  </div>
            </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Network className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">DAO Governance</h3>
                    <p className="text-slate-600 dark:text-slate-300">Democratic decision-making with smart contracts and transparent treasury management</p>
                  </div>
            </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Compliance Automation</h3>
                    <p className="text-slate-600 dark:text-slate-300">Multi-framework support with automated reporting and evidence collection</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Real-time Monitoring</h3>
                    <p className="text-slate-600 dark:text-slate-300">Continuous compliance monitoring with predictive risk scoring and alerts</p>
                  </div>
            </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Zero-Trust Security</h3>
                    <p className="text-slate-600 dark:text-slate-300">Cryptographic verification and role-based access control with blockchain audit trails</p>
                  </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By Industry Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-100 via-white to-orange-50 dark:from-orange-950/30 dark:via-slate-900 dark:to-orange-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Built for every industry
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From startups to enterprises, FilecoinGov adapts to your industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Financial Services</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">SOX, PCI DSS, and regulatory compliance automation for financial institutions</p>
              <div className="text-orange-600 dark:text-orange-400 text-sm font-medium">Learn more →</div>
            </div>

                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Healthcare</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">HIPAA compliance with patient data protection and audit trails</p>
              <div className="text-orange-600 dark:text-orange-400 text-sm font-medium">Learn more →</div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Technology</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">GDPR, CCPA compliance for SaaS companies and data platforms</p>
              <div className="text-orange-600 dark:text-orange-400 text-sm font-medium">Learn more →</div>
          </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Manufacturing</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">ISO 27001 and supply chain data sovereignty compliance</p>
              <div className="text-orange-600 dark:text-orange-400 text-sm font-medium">Learn more →</div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Retail & E-commerce</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">PCI DSS and consumer data protection compliance</p>
              <div className="text-orange-600 dark:text-orange-400 text-sm font-medium">Learn more →</div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-orange-800 hover:shadow-orange-200/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Government</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">FedRAMP, FISMA compliance with decentralized security</p>
              <div className="text-orange-600 dark:text-orange-400 text-sm font-medium">Learn more →</div>
            </div>
          </div>
        </div>
      </section>

                  {/* Ready to get started */}
      <section className="py-24 px-4 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            Be among the first to experience the future of decentralized data governance. Join our exclusive waitlist.
          </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => setShowWaitlistModal(true)}
              className="bg-white hover:bg-orange-50 text-orange-600 px-8 py-3 text-base font-medium rounded-md shadow-lg hover:shadow-orange-300/50 transition-all duration-300"
            >
              Join waitlist
            </Button>
          </div>

          <div className="text-sm text-orange-200">
            Get early access and exclusive updates as we build the future of enterprise data governance.
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">Governance Engine</a></li>
                <li><a href="#" className="hover:text-white">Compliance Automation</a></li>
                <li><a href="#" className="hover:text-white">Decentralized Storage</a></li>
                <li><a href="#" className="hover:text-white">DAO Framework</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">Financial Services</a></li>
                <li><a href="#" className="hover:text-white">Healthcare</a></li>
                <li><a href="#" className="hover:text-white">Technology</a></li>
                <li><a href="#" className="hover:text-white">Manufacturing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">SDK</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-4xl font-bold mb-4 md:mb-0">FilecoinGov</div>
              <div className="text-slate-400 text-sm">
                © 2025 FilecoinGov. Infrastructure to grow your data governance.
              </div>
            </div>
          </div>
        </div>

        {/* Massive Brand Name */}
        <div className="relative flex items-center justify-center min-h-[30vh] px-4">
          <h2 className="text-[clamp(8rem,17vw,25rem)] font-black bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent leading-none tracking-tighter select-none">
            FilecoinGov
          </h2>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Join the Waitlist
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Be among the first to experience FilecoinGov
              </p>
            </div>

            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Company Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Enter your company email"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowWaitlistModal(false)}
                  className="flex-1 px-4 py-3 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
          toast.type === 'success'
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              {toast.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5">⚠️</div>
              )}
            </div>
            <p className="text-sm font-medium">{toast.message}</p>
            <button
              onClick={() => setToast(null)}
              className="ml-2 text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
