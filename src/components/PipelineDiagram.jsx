export default function PipelineDiagram() {
  const nodes = [
    { icon: "🌐", label: "Retailer Sites", sub: "Carrefour · Naivas · QuickMart · Greenspoon" },
    { icon: "⚙️", label: "GitHub Actions", sub: "Automated weekly scrape" },
    { icon: "🔄", label: "Normalize", sub: "Clean, dedupe, structure" },
    { icon: "🗄️", label: "Firestore", sub: "Single source of truth" },
    { icon: "📱", label: "PWA Client", sub: "Offline-first, cached" },
  ];

  return (
    <div className="pipeline-diagram">
      <div className="pipeline-diagram__flow">
        {nodes.map((node, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div className="pipeline-diagram__node">
              <span className="pipeline-diagram__node-icon">{node.icon}</span>
              <span className="pipeline-diagram__node-label">{node.label}</span>
              <span className="pipeline-diagram__node-sub">{node.sub}</span>
            </div>
            {i < nodes.length - 1 && (
              <div className="pipeline-diagram__arrow">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
