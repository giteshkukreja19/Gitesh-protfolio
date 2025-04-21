
interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeSnippet = ({ code, language = "javascript", title }: CodeSnippetProps) => {
  return (
    <div className="bg-navy/90 border border-teal/20 rounded-lg overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-teal/20 flex items-center">
          <div className="flex space-x-2 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-textSecondary text-sm">{title}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className={`language-${language} text-sm font-mono text-teal`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
