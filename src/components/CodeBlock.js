import React from 'react'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { duotoneLight } from 'react-syntax-highlighter/styles/prism';

const CodeBlock = (props) => (
    <SyntaxHighlighter language='csharp' style={duotoneLight} highlighter={"prism"}>
        {props.children || 'Solution couldn\'t be loaded... Please make sure you\'re connected to the internet!'}
    </SyntaxHighlighter>
)

export default CodeBlock;