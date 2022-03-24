import styled from "styled-components"

export const Rules=styled.section`
color:white;
margin:auto;
text-align:center;
width:600px;
box-shadow: rgba(191, 255, 83, 0.5) 0px 22px 70px 4px;
padding: 0 0 1rem 0;
`
export const Button=styled.button<{primary:string}>`

`
export function Instructions({setInstructions}:any){
    return <Rules>
        <h4>Instructions</h4>
        <ol>
            <li>Each question carry two marks for correct answer</li>
            <li>Two options will be given, out of two only one option is correct</li>
            <li>Answers to Questions are shown at the end of exam</li>
            <li>Don't refresh your page</li>
            <li>There's no going back to question once it is answered</li>
            <li>Results are saved in profile to self evaluate </li>
        </ol>
        <Button primary={'primary'} onClick={()=>setInstructions(false)}>Proceed</Button>
    </Rules>
}