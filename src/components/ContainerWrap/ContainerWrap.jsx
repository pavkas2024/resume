import style from "./ContainerWrap.module.css";




const ContainerWrap = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div> 
    )
};

export default ContainerWrap;