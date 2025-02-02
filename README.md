
# StuyCCC

A website made for Stuyvesant High School's Competitive Coding Club

# Development Setup
Make sure you have Node.js installed, which should come with npm. Open up a terminal in the folder and type `npm install` to install all necessary packages. Next type `npm run dev` to start the development server and open up https://localhost:3000 in your browser to see the site running on your computer. This will update upon any file changes.

# Editing Guidelines
## Posts
To create a new post, create a markdown file (.md) in the /content/posts folder. You can name this whatever you want.

Next, create frontmatter using the triple dash notation. Include the title, cover, and date. The cover won't be necessary if there isn't a photo. If you do have a photo, please upload it in the /public/posts folder. (Please crop it!!!!) Then in the frontmatter, provide the file path to that image relative to the public folder. For example, if I upload an image called "pclassic2024f.png" in the /public/posts folder, the frontmatter will look like the following.

    ---
	title: PClassic Spring 2024 Results
	cover: /posts/pclassic2024s.png
	date: 04/10/24
	---

Please note that the title and date won't flag an error if they're missing but they are required for display. The date format must be in the form DD/MM/YY.

Below the frontmatter is where the content is stored. You can use html syntax as well as some basic syntax. For example, math symbols can be written using the \$ sign. \$x\$ will display an algebraic symbol, $x$. Links can be created using the HTML anchor tag. Double line breaks can be created using two \<br/\> tags. Other markdown syntaxes don't seem to work, such as # for headers, so stick to using HTML tags if you need more flexibility.