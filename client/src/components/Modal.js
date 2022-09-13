import '../App.css'

const Modal = () => {
    const styles = {
        modalBG: 'gradient-bg-welcome absolute w-screen top-0 left-0 h-screen flex justify-center items-center',
        modal: 'w-4/12 bg-white rounded-xl shadow-custom flex flex-col p-6 xl_cstm:w-5/12 lg_cstm:w-6/12 md_cstm:w-9/12',
        cancel: 'flex justify-end',
        cancelBtn: 'bg-transparent border-0 text-2xl pointer-cursor',
        title: 'inline-block text-center mt-3 text-3xl',
        options: 'flex justify-center items-center',
        close: 'bg-gray-300 hover:bg-gray-400 text-rose-500 font-bold py-2 px-4 rounded-l',
        publish: 'bg-gray-300 hover:bg-gray-400 text-emerald-600 font-bold py-2 px-4 rounded-r',
        para: 'my-3 text-center'
    }
  return (
    <div className={styles.modalBG}>
        <div className={styles.modal}>
            <div className={styles.cancel}>
                <button className={styles.cancelBtn}>X</button>
            </div>
            <h1 className={styles.title}>Chose the Subscription you want to add: </h1>
            <p className= {styles.para}>checkout after choosing</p>
            <p className= {styles.para}>checkout after choosing</p>
            <p className= {styles.para}>checkout after choosing</p>
            <div className={styles.options}>
                <button className={styles.close}>Cancel</button>
                <button className={styles.publish}>Publish</button>
            </div>
        </div>
    </div>
  )
}

export default Modal