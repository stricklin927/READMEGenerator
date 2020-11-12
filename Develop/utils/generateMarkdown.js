// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  By ${data.name}
  GitHub username: ${data.username}

  ![License](https://img.shields.io/badge/License-${data.license}-green.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation <a name="installation"></a>
  ${data.installation}

  ## Usage <a name="usage"></a>
  ${data.usage}

  ## License <a name="license"></a>
  This application is licensed under the ${data.license} License.

  ## Contributing <a name="contribution"></a>
  ${data.contribution}
  
  ## Tests <a name="tests"></a>
  ${data.tests}

  ## Questions <a name="questions"></a>
  For questions about this application, you can contact me at:
  * Email: ${data.email}
  * GitHub: https://github.com/${data.username}
  
`;
}

module.exports = generateMarkdown;
