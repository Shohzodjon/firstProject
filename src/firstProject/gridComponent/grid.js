import './grid.css';

function GridComponent(){
    return(
<section className='home--section'>
    
    <div className="home--grid">
        <div className="item grid-item1">
            <img src="./foto/img_6.webp"/>
            <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
        <div className="item grid-item2">
            <img src="./foto/img_2.webp"/>
            <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
        <div className="item grid-item3">
            <img src="./foto/img_10.webp"/>
            <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
        <div className="item grid-item4">
            <img src="./foto/img_1.webp"/>
            <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
        <div className="item grid-item5">
            <img src="./foto/img_7.webp"/>
            <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
        <div className="item grid-item6">
            <img src="./foto/img_8.webp"/>
            <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
        <div className="item grid-item7">
            <img src="./foto/img_9.webp"/>
            <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
        <div className="item grid-item8">
        <img src="./foto/img_3.webp"/>
        <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
        <div className="item grid-item9">
            <img src="./foto/img_4.webp"/>
            <span className="bookmark"><ion-icon name="bookmark-outline"></ion-icon></span>
            <span className = "arrow-outline"><ion-icon name="arrow-redo-outline"></ion-icon></span>
        </div>
    </div>
</section>
    ) 
}
export default GridComponent;