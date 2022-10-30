import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { uploadImage } from "../services/upload";

export default function Upload({ setIsUploadShown }) {
    const [formData, setFormData] = useState({
        img_name: "",
        img: undefined
    })

    function handleSubmit(e) {
        e.preventDefault()
        const form = new FormData();
        form.append("name", formData.img_name);
        form.append("files", formData.img);
        uploadImage(form)
    };

    return (
        <>
            <div className="upload">
                <button
                    className="upload-hide"
                    onClick={() => setIsUploadShown(false)}
                >
                    <GrClose />
                </button>
                <form
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >
                    <label>Image Name
                        <input
                            type="text"
                            name="img_name"
                            value={formData.img_name}
                            onChange={(e) => setFormData(prevData => ({
                                ...prevData,
                                img_name: e.target.value
                            }))}
                            autoComplete="off"
                        />
                    </label>
                    <label htmlFor="img-upload">Choose Image</label>
                    <input
                        type="file"
                        name="img"
                        id="img-upload"
                        onChange={(e) => setFormData(prevData => ({
                            ...prevData,
                            img: e.target.files[0]
                        }))}
                        accept="image/*"
                    />
                    <button>
                        Upload
                    </button>
                </form>
            </div>
            <div className="upload-before"></div>
        </>
    )
}