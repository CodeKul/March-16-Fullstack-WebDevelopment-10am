import React, { useRef } from 'react'
import "./TopRef.css"

export default function TopRef() {

    const topRef = useRef(null)

    const GoTop = () => {
topRef.current.scrollIntoView()
    }

    return (
        <div>
            <div className="container">
                <section ref={topRef} id="top" className="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consectetur sapiente maiores adipisci quidem vitae sequi cumque nam veniam mollitia. Doloremque nisi eius quis sint aliquid vitae explicabo est recusandae!
                </section>
                <div className="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consectetur sapiente maiores adipisci quidem vitae sequi cumque nam veniam mollitia. Doloremque nisi eius quis sint aliquid vitae explicabo est recusandae!
                </div>
                <div className="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consectetur sapiente maiores adipisci quidem vitae sequi cumque nam veniam mollitia. Doloremque nisi eius quis sint aliquid vitae explicabo est recusandae!
                </div>
                <div className="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consectetur sapiente maiores adipisci quidem vitae sequi cumque nam veniam mollitia. Doloremque nisi eius quis sint aliquid vitae explicabo est recusandae!
                </div>
                <div className="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consectetur sapiente maiores adipisci quidem vitae sequi cumque nam veniam mollitia. Doloremque nisi eius quis sint aliquid vitae explicabo est recusandae!
                </div>
                <div className="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consectetur sapiente maiores adipisci quidem vitae sequi cumque nam veniam mollitia. Doloremque nisi eius quis sint aliquid vitae explicabo est recusandae!
                </div>
                <div className="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consectetur sapiente maiores adipisci quidem vitae sequi cumque nam veniam mollitia. Doloremque nisi eius quis sint aliquid vitae explicabo est recusandae!
                </div>

                <button onClick={GoTop}>Go To Top</button>
            </div>
        </div>
    )
}
