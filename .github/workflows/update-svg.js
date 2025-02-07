const fs = require('fs');
const path = require('path');

// Define paths (adjust if needed)
const testSvgPath = path.join(__dirname, 'test.svg');
const graphSvgPath = path.join(__dirname, 'Graph.svg');
const outputSvgPath = path.join(__dirname, 'generated.svg');

// Read the files
let testSvg = fs.readFileSync(testSvgPath, 'utf-8');
let graphSvg = fs.readFileSync(graphSvgPath, 'utf-8');

// Optionally remove the XML declaration from Graph.svg if present
graphSvg = graphSvg.replace(/<\?xml.*?\?>/, '').trim();

// Optionally, you might want to remove the outer <svg> tags from Graph.svg
// if you want to inline just its inner content. For example:
const graphContentMatch = graphSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
if (graphContentMatch) {
  graphSvg = graphContentMatch[1].trim();
}

// Replace everything between the markers (inclusive)
// This regex will match from <!-- GRAPH_BOX_START --> to <!-- GRAPH_BOX_END -->
const updatedSvg = testSvg.replace(
  /<!-- GRAPH_BOX_START -->[\s\S]*?<!-- GRAPH_BOX_END -->/,
  `<!-- GRAPH_BOX_START -->\n${graphSvg}\n<!-- GRAPH_BOX_END -->`
);

// Write the updated SVG to a new file
fs.writeFileSync(outputSvgPath, updatedSvg, 'utf-8');
console.log(`Updated SVG written to ${outputSvgPath}`);
