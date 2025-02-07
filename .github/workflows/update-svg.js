const fs = require('fs');
const path = require('path');

// Define paths
const testSvgPath = path.join(__dirname, '../../test.svg');
const graphSvgPath = path.join(__dirname, '../../Graph.svg');
const outputSvgPath = path.join(__dirname, '../../generated.svg');

// Read the files
let testSvg = fs.readFileSync(testSvgPath, 'utf-8');
let graphSvg = fs.readFileSync(graphSvgPath, 'utf-8');

// Remove XML declaration if present
graphSvg = graphSvg.replace(/<\?xml.*?\?>/, '').trim();

// Remove outer <svg> tags (if desired) and extract inner content
const graphContentMatch = graphSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
if (graphContentMatch) {
  graphSvg = graphContentMatch[1].trim();
}

// Define original and target dimensions
const targetWidth = 500;
const targetHeight = 440;
const originalWidth = 670;
const originalHeight = 360;

// Calculate uniform scale factor and offsets
const scaleFactor = Math.min(targetWidth / originalWidth, targetHeight / originalHeight);
const scaledWidth = originalWidth * scaleFactor;   // Expect ~500
const scaledHeight = originalHeight * scaleFactor; // Expect ~268.67
const offsetY = (targetHeight - scaledHeight) / 2;   // Center vertically

// Build the transform string: note that the border box is at (220,490)
const transform = `translate(220,${490 + offsetY}) scale(${scaleFactor})`;

// Replace the content between markers with the border and transformed graph content
const updatedSvg = testSvg.replace(
   /<!-- GRAPH_BOX_CONTENT_START -->[\s\S]*?<!-- GRAPH_BOX_CONTENT_END -->/,
  `<!-- GRAPH_BOX_CONTENT_START -->
<rect x="220" y="490" width="500" height="440" fill="lavender" stroke="black" filter="url(#dropshadow)"/>
<g transform="translate(220,490) scale(${500/670},${440/360})">
${graphSvg}
</g>
<!-- GRAPH_BOX_CONTENT_END -->`
);

// Write the updated SVG to a new file
fs.writeFileSync(outputSvgPath, updatedSvg, 'utf-8');
console.log(`Updated SVG written to ${outputSvgPath}`);
