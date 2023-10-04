import { useState } from "react"
import logo from "../src/assets/logo.png"
import axios from "axios"

const App = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState(998)

    const onSend = async () => {
        if(name && phone.length > 11) {
            const TOKEN = '6663748006:AAFDP4KbQVTLWlp2jWf6FGGXJwjZLvld1nU'
            const CHAT_ID = '-1001907930620'
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'

            let msg = `<b>---------------------------</b>\n`
            msg += `<b>${name}</b>\n`
            msg += `<b>${phone}</b>\n`
            msg += `<b>---------------------------</b>`
            

            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: msg
            }, setName(''), setPhone(998)).then(() => {
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
                                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Ismingizni kiriting..." className="bg-[#fff] mt-[3px] text-black input input-bordered w-full" />
                            </div>
                            <div className="mt-[15px]">
                                <p className="text-[#FAFEFC] text-lg">Telefon raqamingiz:</p>
                                <input value={phone} onChange={e => setPhone(e.target.value)} type="number" placeholder="Telefon raqamingiz..." className="bg-[#fff] mt-[3px] text-black input input-bordered w-full" />
                            </div>
                        </div>      
                        <div className="mt-[35px] w-full">
                            <button onClick={onSend} className="btn btn-success bg-[#4CC671] w-full rounded-3xl py-[6px] min-h-0 h-[42px] text-white">Jo'natish</button>
                        </div>  
                        <p className="text-[#FAFEFC] text-lg mt-[40px] mb-[25px] lg:mb-[40px]">Toshkent, O'zbekiston</p>      
                    </div>          
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