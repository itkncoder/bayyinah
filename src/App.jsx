import { useRef, useState } from "react"
import logo from "../src/assets/logo.png"
import axios from "axios"

const App = () => {

    const [name, setName] = useState("")

    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")
    const [three, setThree] = useState("")  
    const [four, setFour] = useState("")    

    const oneRef = useRef(null)
    const twoRef = useRef(null)
    const threeRef = useRef(null)
    const fourRef = useRef(null)

    const onSend = async () => {
        if(name && one && two && three && four) {
            const TOKEN = '6663748006:AAFDP4KbQVTLWlp2jWf6FGGXJwjZLvld1nU'
            const CHAT_ID = '-1001907930620'
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'

            let msg = `<b>---------------------------</b>\n`
            msg += `<b>${name}</b>\n`
            msg += `<b>+998${one}${two}${three}${four}</b>\n`
            msg += `<b>---------------------------</b>`
            

            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: msg
            }, setName(''), setOne(), setTwo(), setThree(), setFour()).then(() => {
                document.getElementById('success').showModal()
            })
        } else {
            document.getElementById('error').showModal()
        }
    }

    return (
        <div className="flex bg px-[10px] justify-center items-center">
            <div className="h-screen">
                <div className="flex justify-center my-[45px] lg:my-[75px]">
                    <img src={logo} alt="logo" className="w-[240px]"/>
                </div>
                <div className="relative shadow-lg rounded-[25px] border-2 border-[#FAFEFC]">
                    <div className="blur w-full h-full rounded-[25px] absolute"></div>
                    <div className="flex relative z-10 flex-col rounded-[25px] items-center px-[25px] lg:px-[50px]">
                        <h1 className="text-[#F9FBFC] text-[32px] text-center mt-[50px] lg:mt-[60px] lg:text-[36px]">ARAB TILI & CEFR</h1>
                        <p className="text-[#F9FBFC] text-center mt-[15px] text-lg max-w-[340px]">
                            Qabul ochiq!
                            <br />
                            Ma'lumotlaringizni qoldiring va biz sizga qong'iroq qilamiz
                        </p>
                        <div className="w-full mt-[35px]">
                            <div>
                                <p className="text-[#FAFEFC] text-lg">Ismingiz:</p>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Ismingizni kiriting..." className="bg-[#fff] font-[500] mt-[3px] text-[#525252] input input-bordered w-full" />
                            </div>
                            <div className="mt-[15px]">
                                <p className="text-[#FAFEFC] text-lg">Telefon raqamingiz:</p>
                                <div className="bg-[#fff] mt-[3px] text-[#525252] input input-bordered w-full flex items-center gap-[3px]">
                                    <p className="font-[500]">+998 </p>
                                    <div className="flex items-center gap-1 justify-between">
                                        <p  className="font-[500] text-lg">(</p>
                                        <input ref={oneRef} value={one} onChange={e => {
                                            if (one.length < 2) {
                                                setOne(e.target.value)                                                                                              
                                            }
                                            if (one.length == 1) {
                                                twoRef.current.focus()
                                            }  
                                        }} placeholder="___" type="number" className="bg-[#fff] flex justify-center w-[18px] text-[#525252] font-[500]" />
                                        <p className="font-[500] text-lg">)</p>
                                    </div>
                                    <input ref={twoRef} value={two} onChange={e => {
                                        if (two.length < 3) {
                                            setTwo(e.target.value)                                            
                                        }
                                        if (two.length == 2) {
                                            threeRef.current.focus()
                                        } 
                                    }} placeholder="____" type="number" className="bg-[#fff] w-[28px] text-[#525252] font-[500]" />
                                    <p className="font-[500] text-lg">-</p>    
                                    <input ref={threeRef} value={three} onChange={e => {
                                        if (three.length < 2) {
                                            setThree(e.target.value)                                            
                                        }
                                        if (three.length == 1) {
                                            fourRef.current.focus()
                                        } 
                                    }} placeholder="____" type="number" className="bg-[#fff] w-[20px] text-[#525252] font-[500]" />      
                                    <p className="font-[500] text-lg">-</p>        
                                    <input ref={fourRef} value={four} onChange={e => {
                                        if (four.length < 2) {
                                            setFour(e.target.value)                                            
                                        }
                                    }} placeholder="____" type="number" className="bg-[#fff] w-[20px] text-[#525252] font-[500]" />                        
                                </div>
                            </div>
                        </div>      
                        <div className="mt-[35px] w-full">
                            <button onClick={onSend} className="btn btn-success bg-[#4CC671] w-full rounded-3xl py-[6px] min-h-0 h-[42px] text-white">Jo'natish</button>
                        </div>  
                        <p className="text-[#FAFEFC] text-lg mt-[40px] mb-[25px] lg:mb-[40px]">Toshkent, O'zbekiston</p>      
                    </div>          
                </div>

                <div className="flex justify-center w-full flex-col mt-10">
                    <p className="text-[#FAFEFC] text-lg text-center ">Bu sayt ZET GROUP tomonidan yasalgan</p>
                    <a href="tel:+998777772787" className="text-[#FAFEFC] text-center hover:underline">+998 77 777 27 87</a>
                </div>

            </div>

            <dialog id="success" className="modal">
                <div className="modal-box bg">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-white text-center my-[25px]">Sizning so'rovingiz qabul qilindi!</h3>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog id="error" className="modal">
                <div className="modal-box bg-rose-700">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-white text-center my-[25px]">Xamma malumotlarni kiriting!</h3>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default App