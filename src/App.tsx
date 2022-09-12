import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accodion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import { UnControledRating } from './components/UnControledRating/UnControledRating';
import {ButtonOnControled} from './components/ButtonOnControled/ButtonOn';
import {ButtonOn} from './components/ButtonOn/ButtonOn';


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <Accordion titleValue={'This is APP components'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<ButtonOnControled on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<UnControledAccordion titleValue={'This is APP components'}/>*/}
            <UnControledRating />
            <ButtonOn onChage={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}


export default App;
