const fs = require('fs');
const path = require('path');

// Adjust the paths: from .github/workflows, two levels up is the repo root.
const testSvgPath = path.join(__dirname, '../../test.svg');
const graphSvgPath = path.join(__dirname, '../../Graph.svg');
const outputSvgPath = path.join(__dirname, '../../generated.svg');

// Read the files
let testSvg = fs.readFileSync(testSvgPath, 'utf-8');
let graphSvg = fs.readFileSync(graphSvgPath, 'utf-8');

// Optionally remove the XML declaration from Graph.svg if present
graphSvg = graphSvg.replace(/<\?xml.*?\?>/, '').trim();

// Optionally, remove the outer <svg> tags if you want just the inner content
const graphContentMatch = graphSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
if (graphContentMatch) {
  graphSvg = graphContentMatch[1].trim();
}

// Replace everything between the markers (inclusive)
const updatedSvg = testSvg.replace(
  /<!-- GRAPH_BOX_CONTENT_START -->[\s\S]*?<!-- GRAPH_BOX_CONTENT_END -->/,
  `<!-- GRAPH_BOX_CONTENT_START -->
<g transform="translate(220,490) scale(${500/670},${440/360})">
${graphSvg}
</g>
<!-- GRAPH_BOX_CONTENT_END -->`
);

// Write the updated SVG to a new file
fs.writeFileSync(outputSvgPath, updatedSvg, 'utf-8');
console.log(`Updated SVG written to ${outputSvgPath}`);
