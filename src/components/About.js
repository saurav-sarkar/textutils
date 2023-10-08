    export default function About(props) {

        // const [myStyle, setMyStyle] = useState
        // ({
        //     color: 'black',
        //     backgroundColor: 'white'
        // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'#213a81',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 109)':'white',
        
    }
    return (
    <div className="container" style={myStyle}>
        <h1 className='my-2' style={{color: props.mode ==='dark'?'white':'#213a81'}}>About Us </h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Why Textutil?:
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Textutil is designed to simplify your text-related tasks, whether you're creating content, editing documents, or working on a coding project. With a user-friendly interface and a suite of powerful tools, you can streamline your work, save time, and ensure your text is error-free .</strong>
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Who Can Benefit:
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Writers: Enhance your writing with proper formatting, and quickly analyze your text for improvements.

            Students: Count words in essays, format reports, or generate placeholder text for school projects.
            </strong>
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Key Features:
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Text Formatting: Effortlessly format your text with options to bold, italicize, underline, and create bulleted or numbered lists. Say goodbye to manual formatting headaches! <br /> <br />

            Character and Word Count: Quickly determine the number of characters and words in your text to meet precise word count requirements. <br /> <br />

            Case Conversion: Easily convert text to uppercase, lowercase, sentence case, or title case with a single click. <br /> <br />

            Find and Replace: Search for specific words or phrases in your text and replace them as needed. Perfect for editing and proofreading tasks. <br /> <br />

            Lorem Ipsum Generator: Generate placeholder text for your design projects in various lengths and formats, making layout design a breeze. <br /> <br />

            Text Sorting: Organize lists, paragraphs, or data in alphabetical or numerical order with our intuitive sorting tool..</strong> 
        </div>
        </div>
    </div>
    </div>
    </div>
)
}
