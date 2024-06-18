import React from 'react';
import {RichComponent} from "./reach-component/reach-component";
import {Button} from "./button/button";

export const DestructingExample = () =>
    <>
        {/* Destructing props*/}
        {/*<RichComponent one="one" two={2} three={undefined} four={44}/>*/}

        {/*Destructing JSX non HTML property*/}
        {/*<Button some='some property value' onClick={() => console.log('123')} >Name</Button>*/}
    </>