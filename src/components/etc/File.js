import file from "../../static/images/file.svg";

function File() {
    return (
        <div className="file mt-2">
            <div>
                <svg 
                    style={{marginLeft: '7px', marginBottom: '2.5px', cursor: 'pointer'}} 
                    width="12" 
                    height="11" 
                    viewBox="0 0 13 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1.9364 0.000153443C1.79684 0.000153443 1.65712 0.0533168 1.55076 0.159951L0.459877 1.25083C0.24661 1.4641 0.24661 1.8094 0.459877 2.02212L4.43776 6L0.459877 9.97788C0.24661 10.1911 0.24661 10.5364 0.459877 10.7492L1.55076 11.84C1.76403 12.0533 2.10932 12.0533 2.32205 11.84L6.29993 7.86217L10.2778 11.84C10.4905 12.0533 10.8364 12.0533 11.0491 11.84L12.14 10.7492C12.3532 10.5359 12.3532 10.1906 12.14 9.97788L8.1621 6L12.14 2.02212C12.3532 1.8094 12.3532 1.46355 12.14 1.25083L11.0491 0.159951C10.8358 -0.0533168 10.4905 -0.0533168 10.2778 0.159951L6.29993 4.13783L2.32205 0.159951C2.21541 0.0533168 2.07597 0.000153443 1.9364 0.000153443Z" fill="black"/>
                </svg>
                <a className="fileLink ms-3" href="#">
                    zayav.word
                </a>
            </div>

            <a href="#">
                <img src={file} alt=""/>
            </a>
        </div>
    )
}

export default File