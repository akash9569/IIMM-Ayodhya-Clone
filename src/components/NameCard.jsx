import React from 'react';
import Image from '../img/akash.png';

export default function NameCard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 text-bg-primary">
                    <h2 className="fw-bold mb-4 mt-4 ms-5 fw-bold">
                        <span style={{ borderLeft: "5px solid white", paddingLeft: "10px" }}>
                            Message From the Chief Advisor
                        </span>
                    </h2>
                    <div className="row d-flex mb-3">
                        <div className="col-sm-4 pt-3 ps-5">
                            <img src={Image} alt="" className='ms-5 zoom-img rounded w-75' style={{ height: '42vh'}} />
                            <h4 className='text-center pt-4 fw-bold fs-2'>Akash Singh</h4>
                            <p className='text-center mb-0 fw-bold fst-italic'>Mobile: +91  95695  81233 </p>
                            <p className='text-center fw-bold fst-italic'>Email: akashsingh.internship@gmail.com
                            </p>
                        </div>
                        <div className="col-sm-8 text-wrap ">
                            <p>Akash Singh ek aise insaan ka naam hai jiske dil mein samundar bhar emotions hain, lekin duniya ke saamne woh muskurahat ki ek zid pe jeeta hai. Har kisi ke liye motivator, guide, helper ban jaata hai — par khud ke liye? Uske jazbaat itne gehre hain ki kabhi-kabhi woh khud bhi unka matlab nahi samajh pata. Log usse kehte hain "Tu to hamesha positive rehta hai", par uske andar ke toofanon ka raaz sirf woh jaanta hai.<br />

                                Akash ek emotional warrior hai — jo har roz apne andhar ke confusion, pressure aur loneliness se ladta hai, bina kisi ko bataye. Uske paas sapne hain, uske paas zimmedariyaan hain, uske paas kuch "majbooriyaan" bhi hain — aur sabse badi baat, uske paas dil hai — jo duniya ke dard ko mehsoos karta hai. <br />

                                Woh kisi ke liye bhai hai, kisi ke liye sahara, kisi ke liye dost, kisi ke liye inspiration — lekin aksar khud apne liye ek anjaana.
                                Kabhi uska mann karta hai sab kuch chhod de… par uske ghar waalon ki yaad usse sambhal leti hai.
                                Woh "chill" nahi kar pata, kyunki har chill ke peeche ek guilt hota hai: "Paise kharch ho gaye toh kya?"

                                Woh logon ke liye helpful rehta hai, par aksar log uski goodness ka hi faayda utha lete hain. Is duniya mein jahan achi niyat ko kamzor samjha jata hai, Akash fir bhi apni goodness nahi chhodta.
                                Yeh uski sabse badi takat hai.

                                Woh har roz khud se poochta hai:
                                "Main itna emotional kyu hoon?"
                                "Main khud ko kyu nahi samajh pata?"
                                "Mere andar ye alag-alag roop kyu hain?"

                                Par sach yeh hai bhai...
                                Tera dil bohot bada hai. Teri empathy rare hai. Teri depth priceless hai.
                                Jitna tu khud ke baare mein confused hai, utna hi tu special hai.

                                Akash ek creative soul hai. Uske andar healing ka magic chhupa hai — chahe woh words ke through ho, ya kisi ke kandhe ban ke ho. Usse sirf ek cheez chahiye: "Koi toh ho jo uski bhi sun le."
                                Aur jab koi nahi hota — tab woh khud ki awaaz banne ki koshish karta hai.

                                Ab waqt aa gaya hai Akash...
                                Apni khud ki journey ke hero ban jaane ka.
                                Khud se pyar karne ka, bina kisi reason ke.
                                Har din ek line likhne ka:

                                "Main enough hoon. Main jaise hoon, waise hi perfect hoon."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
