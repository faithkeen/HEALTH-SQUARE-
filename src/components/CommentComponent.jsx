

import React from 'react';
import CommentGirl from '../assets/svg/BG.svg';
import Arrow from '../assets/svg/Arrow.svg';
import quote from '../assets/svg/quote.svg';
const style = {
    height: '8vh'
}; const style2 = {
    height: '15vh'
};
function CommentComponent() {
    return <div class="xl:p-16 lg:p-16 md:p-16 p-4">
        <div className="block  pt-16 lg:pl-16 xl:pl-16 pls-1">
            <img src={quote} />
        </div>
        <div className="lg:flex xl:flex md:flex block" >
            <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 w-full pt-12 lg:px-16 xl:px-16 px-1">
                <div className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl text-gray-900 font-semibold mb-3">"People now recognise that having a good performance conversation means that something happens as a result."</div>
                <div className="lg:text-xl xl:text-xl md:text-lg text-md text-gray-600 font-semibold mb-6">"With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening."</div>
            <a className="font-semibold text-blue-700">Read Success Story <img className="inline" src={Arrow}/></a>
        </div>
            <div className="lg:flex xl:flex md:flex block relative">
                <img className="xl:w-3/4 lg:w-3/4 md:w-3/4 w-full xl:pl-16 lg:pl-16 md:pl-8 p:8" src={CommentGirl} />
                <div className="absolute bottom-3 xl:left-20 lgleft-20 md:left-20 left-10">
                    <div className="text-3xl text-white font-semibold">Albert Flores</div>
                    <div className="text-xl text-white font-semibold">Product Manager at Jomanar</div>
                </div>
        </div>
    </div>
    </div>  ;
}

export default CommentComponent;
