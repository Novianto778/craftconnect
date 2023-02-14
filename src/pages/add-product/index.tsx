import { firestore, storage } from '@/lib/firebase';
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import useAuth from '@/shared/hooks/useAuth';
import { doc, serverTimestamp, writeBatch } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref } from 'firebase/storage';
import { useState } from 'react';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

type Props = {};

const product = {
    id: '123123',
    name: 'Puzzle Stacker Gunung',
    price: 50000,
    category: 'Bahan Kayu',
    image: ['/images/product3.png'],
    description: 'Deskripsi produk',
    highlightImage: '/images/product3.png',
    highlight: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Sed quasi ab error voluptate ipsum pariatur consequatur.',
        'Quis nesciunt ut quas!',
    ],
    userInfo: {
        avatar: 'https://firebasestorage.googleapis.com/v0/b/chat-app-c7b2e.appspot.com/o/avatars%2Fnovianto%2F5z0n5utulifIwWLcYuXKhxkn6wo2?alt=media&token=9ac79793-d356-4511-a8ba-77ef1bc6f328',
        email: 'novianto778@gmail.com',
        role: 'customer',
        uid: '5z0n5utulifIwWLcYuXKhxkn6wo2',
        username: 'novianto',
    },
    createdAt: serverTimestamp(),
};

type Product = typeof product;

const AddProduct = (props: Props) => {
    const [uploadFile] = useUploadFile();
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<any>();

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const images = data.images;
            const imagesUrl: string[] = [];

            const batch = writeBatch(firestore);

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const storageRef = ref(
                    storage,
                    `products/${data.name}/${image.name}`
                );
                await uploadFile(storageRef, image);
                const imageUrl = await getDownloadURL(storageRef);
                imagesUrl.push(imageUrl);
            }

            const highlightImageRef = ref(
                storage,
                `products/${data.name}/${data.highlightImage.name}`
            );

            await uploadFile(highlightImageRef, data.highlightImage);
            const highlightImageUrl = await getDownloadURL(highlightImageRef);

            const productData: Product = {
                ...data,
                images: imagesUrl,
                highlightImage: highlightImageUrl,
                userInfo: {
                    ...currentUser,
                },
            };

            const productRef = doc(firestore, 'products', uuid());
            batch.set(productRef, productData);

            await batch.commit();
        } catch (error) {
            console.log(error);
            // delete uploaded images from storage
            const productStorageRef = ref(storage, `products/${data.name}`);
            await deleteObject(productStorageRef);
        } finally {
            setLoading(false);
        }

        // for (let i = 0; i < images.length; i++) {
        //     const image = images[i];
        //     const storageRef = ref(storage, `products/${image.name}`);
        //     const uploadTask = uploadBytes(storageRef, image);
        //     uploadTask.on(
        //         'state_changed',
        //         (snapshot) => {
        //             const progress =
        //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //             console.log('Upload is ' + progress + '% done');
        //             switch (snapshot.state) {
        //                 case 'paused':
        //                     console.log('Upload is paused');
        //                     break;
        //                 case 'running':
        //                     console.log('Upload is running');
        //                     break;
        //             }
        //         },
        //         (error) => {
        //             console.log(error);
        //         },
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then(
        //                 (downloadURL) => {
        //                     imagesUrl.push(downloadURL);
        //                     if (imagesUrl.length === images.length) {
        //                         const product = {
        //                             ...data,
        //                             images: imagesUrl,
        //                         };
        //                         setDoc(
        //                             doc(db, 'products', product.name),
        //                             product
        //                         );
        //                     }
        //                 }
        //             );
        //         }
        //     );
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="container">
                <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">name</label>
                        <Input type="text" {...register('name')} />
                    </div>
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">price</label>
                        <Input type="text" {...register('price')} />
                    </div>
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">category</label>
                        <Input type="text" {...register('category')} />
                    </div>
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">description</label>
                        <Input type="text" {...register('description')} />
                    </div>
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">images</label>
                        <Input type="file" multiple {...register('images')} />
                    </div>
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">highlight image</label>
                        <Input type="file" {...register('highlightImage')} />
                    </div>
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">highlight1</label>
                        <Input type="text" {...register('highlight.0')} />
                    </div>
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">highlight2</label>
                        <Input type="text" {...register('highlight.1')} />
                    </div>
                    <div className="flex items-center gap-x-8">
                        <label htmlFor="">highlight3</label>
                        <Input type="text" {...register('highlight.2')} />
                    </div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
