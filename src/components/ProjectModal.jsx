  import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import mermaid from 'mermaid';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#03DAC6',
    primaryTextColor: '#fff',
    lineColor: '#03DAC6',
    fontSize: '14px',
    fontFamily: 'monospace'
  }
});

export default function ProjectModal({ isOpen, onClose, readmePath, title }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const fetchReadme = async () => {
      if (!isOpen || !readmePath) return;
      setLoading(true);
      try {
        const res = await fetch(readmePath);
        const text = await res.text();
        if (isMounted) setContent(text);
      } catch {
        if (isMounted) setContent("### ⚠️ Error\nNo se pudo cargar la documentación técnica.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchReadme();
    return () => { isMounted = false; };
  }, [isOpen, readmePath]);

  useEffect(() => {
    if (!loading && content) {
      setTimeout(() => {
        mermaid.contentLoaded();
      }, 150);
    }
  }, [content, loading]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md">
      <div className="bg-[#1a1a1a] border border-white/10 w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl">
        
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#1a1a1a] z-10">
          <div className="flex flex-col">
            <span className="text-[#03DAC6] font-mono text-[10px] tracking-[0.3em] uppercase mb-1">Technical Documentation</span>
            <h2 className="text-xl font-black text-white tracking-tight">{title}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-16 bg-[#121212] custom-scrollbar" ref={containerRef}>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <div className="w-8 h-8 border-2 border-[#03DAC6] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[#03DAC6] font-mono text-[10px] animate-pulse tracking-widest uppercase">Parsing Ecosystem...</p>
            </div>
          ) : (
            <article className="prose prose-invert prose-emerald max-w-none
              prose-img:inline prose-img:m-1 
              [&_p[align='center']]:flex [&_p[align='center']]:flex-wrap [&_p[align='center']]:justify-center [&_p[align='center']]:gap-1 [&_p[align='center']]:mb-8
              prose-table:border-separate prose-table:border-spacing-0 prose-table:border prose-table:border-white/10 prose-table:rounded-xl prose-table:overflow-hidden
              prose-th:bg-white/[0.03] prose-th:p-4 prose-th:text-[#03DAC6] prose-th:text-xs prose-th:uppercase prose-th:tracking-widest prose-th:border-b prose-th:border-white/10
              prose-td:p-4 prose-td:text-gray-300 prose-td:border-b prose-td:border-white/5 prose-td:text-[13.5px]
              [&_tr:last-child_td]:border-0
              [&_ul.contains-task-list]:list-none [&_ul.contains-task-list]:pl-0
              [&_li.task-list-item]:flex [&_li.task-list-item]:items-center [&_li.task-list-item]:gap-3
              [&_input[type='checkbox']]:appearance-none [&_input[type='checkbox']]:w-4 [&_input[type='checkbox']]:h-4 
              [&_input[type='checkbox']]:border [&_input[type='checkbox']]:border-white/20 [&_input[type='checkbox']]:rounded 
              [&_input[type='checkbox']]:bg-white/5 checked:[&_input[type='checkbox']]:bg-[#03DAC6]
              prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-white/5 prose-h2:font-black
              prose-h3:mt-10 prose-h3:font-bold
              prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mt-6
              prose-li:text-gray-300 prose-li:my-1
              prose-hr:border-white/5 prose-hr:my-12">
              
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    const lang = match ? match[1] : '';

                    if (!inline && lang === 'mermaid') {
                      return (
                        <div className="mermaid bg-[#1a1a1a]/50 p-8 rounded-2xl my-12 flex justify-center border border-white/5 overflow-x-auto shadow-inner">
                          {String(children).replace(/\n$/, '')}
                        </div>
                      );
                    }

                    if (!inline && lang) {
                      return (
                        <div className="mt-12 mb-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl font-sans">
                          <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between border-b border-white/5">
                            <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">{lang}</span>
                          </div>
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={lang}
                            PreTag="div"
                            customStyle={{
                              margin: 0, 
                              padding: '1.8rem',
                              backgroundColor: '#0d0d0d',
                              fontSize: '13px', 
                              lineHeight: '1.6',
                            }}
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        </div>
                      );
                    }

                    return (
                      <code className="bg-[#03DAC6]/10 text-[#03DAC6] px-1.5 py-0.5 rounded font-mono text-[0.9em] border border-[#03DAC6]/20" {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}