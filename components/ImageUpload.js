import React, { useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker';
import { storageRef, storage } from './firebase/config'
import { uploadBytes, getDownloadURL } from 'firebase/storage';


const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const imagePicker = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            quality: 1,
        }).then((response) => {
            if (!response.didCancel) {
                setImage(response.assets[0].uri);
                handleUpload();
            }

        }).catch((error) => {
            console.log(error);
        })
    };


    const handleUpload = async () => {
        const response = await fetch(image);
        const blob = await response.blob();
        const reference = storageRef(storage, 'images/randomimage');
        uploadBytes(reference, blob)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
                }
                );
            })
            .catch((error) => {
                console.log(`Failed to upload file and get link - ${error}`);
            }
            );

    };
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={imagePicker}>
                <Text>ImageUpload</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )


}

export default ImageUpload