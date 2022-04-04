import React from 'react';

const Blogs = () => {
    return (
        <div className='container-fluid p-4'>
            <div className='mt-4'>
                <h1>What is context API?</h1>
                <p>
                    The React Context API allows a React project to generate global variables that may be passed around. This is an alternative to "prop drilling," which involves passing props from grandma to kid to parent, and so on. Context is also marketed as a simpler, lighter way to Redux state management. All you need is React.createContext(). It gives you a customer and a provider.
                </p>
            </div>
            <div className='mt-4'>
                <h1>What symantic tags?</h1>
                <p>
                    Semantic HTML, also known as semantic markup, is HTML that adds meaning to a web page rather than merely presentation. A p tag, for example, indicates that the contained text is a paragraph. Because people understand what paragraphs are and browsers understand how to show them, this is both semantic and presentational. Tags like b and I on the other hand, have no semantic value. They merely specify how the text should appear bold or italic and offer no more meaning to the markup. <br />
                    Examples of semantic HTML tags include:
                </p>

                <ul>
                    <li>Header tags h1 through h6</li>
                    <li>blockquote</li>
                    <li>code</li>
                    <li>em</li>
                </ul>
            </div>
            <div className='mt-4'>
                <h1>Deference betweent inline , block and inline-block elemants?</h1>
                <h5>Inline elements:</h5>
                <p>
                    Inline items take up only the minimum amount of space. Inline elements do not begin with a new line. Other inline elements can reside behind inline components. Top and bottom margins do not exist for inline items.
                </p>
                <h5>Block elements:</h5>
                <p>
                    Regardless of their sufficiency, block elements take up the whole width. Elements in a block always begin in a line. Other components cannot reside behind block elements. Top and bottom margins are present in block elements.
                </p>
                <h5>Inline-Block elements:</h5>
                <p>
                    Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.
                </p>
            </div>
        </div>
    );
};

export default Blogs;