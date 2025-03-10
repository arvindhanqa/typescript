const HEAD =(
    <div style = {{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
    }} />
)
const BODY =(
    <div style = {{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "0px",
    }} />
)
const RIGHT_ARM =(
    <div style = {{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "35deg",
        transformOrigin: "left top"
    }} />
)
const Left_ARM =(
    <div style = {{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "-35deg",
        transformOrigin: "right top"
    }} />
)

const RIGHT_LEG =(
    <div style = {{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-100px",
        rotate: "60deg",
        transformOrigin: "left top"
    }} />
)

const Left_LEG =(
    <div style = {{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "10px",
        rotate: "-60deg",
        transformOrigin: "right top"
    }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, Left_ARM, RIGHT_LEG, Left_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}
export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps){
    return(
    <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style ={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            top: "0px",
            left: "310px"
        }}
        />
        <div style ={{
            height: "10px",
            width: "200px",
            background: "black",
            marginLeft: "120px"
        }}
        />
        <div style ={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px"
        }}
        />
    <div style={{ height :"10px", width: "250px", background:"black"}} />
    </div>
    )
}