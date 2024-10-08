// Clear the body before adding content to prevent duplication
document.body.innerHTML = '';

// Create a container for all content
const container = document.createElement('div');
container.classList.add('flex-container');
document.body.appendChild(container);

// Create a header for "./ Christina Ertural"
const header = document.createElement('h1');
header.innerText = "./ Christina Ertural";
header.style.paddingLeft = "20px";
container.appendChild(header);

// Add the "Researcher" subheading in smaller, grey font
const researcherSubheading = document.createElement('p');
researcherSubheading.innerText = "Researcher";
researcherSubheading.style.paddingLeft = "20px";
researcherSubheading.style.fontSize = "16px";  // Smaller font size
researcherSubheading.style.color = "#808080";  // Grey color
container.appendChild(researcherSubheading);

// Add a dotted line after the header and subheading
const dottedLine = document.createElement('hr');
dottedLine.style.borderTop = "1px dotted #808080";  // Dotted line in grey
container.appendChild(dottedLine);

// Add subheading or subtitle for the website link
const subHeader = document.createElement('p');
subHeader.innerHTML = 'Visit the <a href="https://quantumchemist.github.io/index_old.html">2020 – 2024 website!</a>';
subHeader.style.paddingLeft = "20px";
container.appendChild(subHeader);

// Create a container for the whole page
const mainContainer = document.createElement('div');
mainContainer.style.maxWidth = '1000px';  // Set the max width for the whole container
mainContainer.style.margin = '0 auto';   // Center the container on the page
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.alignItems = 'center';  // Center the iframe and other contents horizontally
mainContainer.style.justifyContent = 'center';  // Center the iframe vertically (if needed)
container.appendChild(mainContainer);  // Append it to the main container, not body

// Function to create a box with a headline, text on the left, and image on the right
function createBoxWithHeadlineTextLeftAndImageRight(headlineText, imgSrc, imgWidth, textHTML) {
    // Create a box container
    const box = document.createElement('div');
    box.style.display = 'flex';
    box.style.flexDirection = 'column';  // Stacks the headline and content vertically
    box.style.justifyContent = 'space-between';
    box.style.alignItems = 'center';
    box.style.marginBottom = '20px';
    box.style.padding = '10px';
    box.style.width = '100%';

    // Create the headline
    const headline = document.createElement('h2');
    headline.innerText = headlineText;
    headline.style.textAlign = 'left';
    box.appendChild(headline); // Add the headline to the box

    // Create the content wrapper for text and image
    const contentWrapper = document.createElement('div');
    contentWrapper.style.display = 'flex';
    contentWrapper.style.justifyContent = 'space-between';
    contentWrapper.style.alignItems = 'center';
    contentWrapper.style.width = '100%';

    // Create the text element (paragraph)
    const text = document.createElement('p');
    text.innerHTML = textHTML;
    text.style.flex = '1';
    text.style.textAlign = 'left';
    text.style.marginRight = '20px';

    // Create the image element
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.maxWidth = imgWidth + 'px';
    img.style.height = 'auto';

    // Append text and image to the content wrapper
    contentWrapper.appendChild(text);
    contentWrapper.appendChild(img);

    // Append the content wrapper to the box
    box.appendChild(contentWrapper);

    return box;
}

// Add the introduction section (headline, text left, image right)
const introBox = createBoxWithHeadlineTextLeftAndImageRight(
    'Introduction',
    'https://github.com/QuantumChemist/QuantumChemist.github.io/blob/main/utils/pic3.png?raw=true',
    100,
    `Hi, I'm <a href="https://g.co/kgs/Bi3Bdb">Chris</a>, scientist in the theoretical and solid-state chemistry community, 
     currently PostDoc in materials chemistry and materials informatics at <a href="https://www.bam.de/">BAM</a> 
     (<a href="https://www.bam.de/Content/EN/Standard-Articles/About-us/Jobs-and-Careers/Young-Science/junior-research-group-george-computational-materials-design.html">George group</a>)
     and former <a href="http://www.cohp.de/">LOBSTER</a> developer.`
);
mainContainer.appendChild(introBox);

// Add the LobsterPyGUI section (headline, text left, video right)
const lobsterBox = createBoxWithHeadlineTextLeftAndImageRight(
    'LobsterPyGUI',
    'https://github.com/QuantumChemist/QuantumChemist.github.io/blob/main/utils/lpglogo.mp4',
    100,
    `If you are a very beginner in using command line interfaces (cli) and/or LOBSTER/LobsterPy, 
    I made a <a href=https://github.com/QuantumChemist/LobsterPyGUI>GUI</a> for you, providing the very basic functionalities of LobsterPy. :)`
);
mainContainer.appendChild(lobsterBox);

// Add the "In my free time" section (headline, text only)
const freeTimeBox = createBoxWithHeadlineTextLeftAndImageRight(
    'In my free time...',
    '',
    0,
    `...I also like to code. <br> So I made a chatbot and a Discord server in homage to the video game Portal. <br> Feel free to add my bot to your server!`
);
mainContainer.appendChild(freeTimeBox);

// Embed the iframe for the top.gg bot link (after LobsterPyGUI section)
const topggIframe = document.createElement('iframe');
topggIframe.src = "https://top.gg/bot/1276530139412566186";
topggIframe.width = "350";
topggIframe.height = "750";
topggIframe.allowTransparency = "true";
topggIframe["frameBorder"] = "0";
topggIframe.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";
mainContainer.appendChild(topggIframe);

container.appendChild(dottedLine)

// Contact section
const contactHeader = document.createElement('h3');
contactHeader.innerText = "How you can contact me";
contactHeader.style.paddingLeft = "20px";
contactHeader.style.textAlign = 'left';
container.appendChild(contactHeader);

// Create contact list
const contactList = document.createElement('dl');
contactList.innerHTML = `
    <dt>GitHub</dt>
    <dd><a href="https://github.com/QuantumChemist">QuantumChemist</a></dd>
    <dt>LinkedIn</dt>
    <dd><a href="https://www.linkedin.com/in/christina-ertural/">Dr. Christina Ertural</a></dd>
    <dt>ResearchGate</dt>
    <dd><a href="https://www.researchgate.net/profile/Christina-Ertural/">Dr. Christina Ertural</a></dd>
`;
contactList.style.paddingLeft = "20px";
contactList.style.textAlign = 'left';
container.appendChild(contactList);

// Footer
const footer = document.createElement('footer');
footer.innerHTML = `&copy; 2024 -- 2025 Christina Ertural`;
footer.style.marginTop = "40px";
footer.style.textAlign = 'center'; // Center the footer
mainContainer.appendChild(footer);
