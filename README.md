
# Full project III | Deepfake

Our project is to create deepfakes of famous people who travelled on the Orient Express in Train World. These people will be giving more information about the museum and the trains. The aim of the project is to use new technologies that are unknown to us and focus on artificial intelligence.




## Links

Github repository : https://github.com/EHB-MCT/full-projects-3-five-guys

Real Time Voice Cloning github repository : https://github.com/CorentinJ/Real-Time-Voice-Cloning

Wav2lip github repository : https://github.com/Rudrabha/Wav2Lip


## Config files

Requirements.txt : Used to install the needed packages 
## References to used code

All the code in our github repository comes from the master branch of the different github repositories of the tools.


##  Configuration & how to use

### Requirements :

- Files on github
- Python 3.7 
- torch 1.7.1
- ffmpeg (For the audio of voice cloning)
- Anaconda3
- Requirements.txt

### How to use :

1. First set everything up on the pc ( Correct version of python , anaconda3 , create new environnements, install all the correct packages on the right version ,ect...)
2. Open cmd 
3. Change the file directory to the voice cloning file
4. Write 'conda activate $environnementname' to enter the environnement you created for voicecloning 
5. Write 'python demo_cli.py --text "write text that you want the voice to use"' to run the script that will create the voice
6. Change to the environnement that you created for wav2lip
7. Change the file directory to the wav2lip file
8. Write 'python inference.py --outfile  "results/$filename.mp4"' to create the lip syncing with the audio you created (Remember to change the path of the audio in inference.py)
9. Check the result in results file
10. Enjoy the deepfake !

## Detailed versions

#### OS : Windows 11

#### Data from environment.yml of voice cloning : 

dependencies:
  - certifi=2020.12.5
  - pip=20.3.3
  - python=3.6.12
  - setuptools=52.0.0
  - sqlite=3.33.0
  - vc=14.2
  - vs2015_runtime=14.27.29016
  - wheel=0.36.2
  - wincertstore=0.2
  - zlib=1.2.11
  - pip:
    - absl-py==0.11.0
    - appdirs==1.4.4
    - astor==0.8.1
    - audioread==2.1.9
    - cached-property==1.5.2
    - cffi==1.14.4
    - chardet==4.0.0
    - cycler==0.10.0
    - dataclasses==0.8
    - decorator==4.4.2
    - dill==0.3.3
    - gast==0.2.2
    - google-pasta==0.2.0
    - grpcio==1.35.0
    - h5py==3.1.0
    - idna==2.10
    - importlib-metadata==3.4.0
    - inflect==5.0.2
    - joblib==1.0.0
    - jsonpatch==1.28
    - jsonpointer==2.0
    - keras-applications==1.0.8
    - keras-preprocessing==1.1.2
    - kiwisolver==1.3.1
    - librosa==0.8.0
    - llvmlite==0.35.0
    - markdown==3.3.3
    - matplotlib==3.3.3
    - multiprocess==0.70.11.1
    - numba==0.52.0
    - numpy==1.19.3
    - opt-einsum==3.3.0
    - packaging==20.8
    - pillow==8.1.0
    - pooch==1.3.0
    - protobuf==3.14.0
    - pycparser==2.20
    - pynndescent==0.5.1
    - pyparsing==2.4.7
    - pyqt5==5.15.2
    - pyqt5-sip==12.8.1
    - python-dateutil==2.8.1
    - pyzmq==21.0.2
    - requests==2.25.1
    - resampy==0.2.2
    - scikit-learn==0.24.1
    - scipy==1.5.4
    - six==1.15.0
    - sounddevice==0.4.1
    - soundfile==0.10.3.post1
    - tensorboard==1.15.0
    - tensorflow==1.15.0
    - tensorflow-estimator==1.15.1
    - termcolor==1.1.0
    - threadpoolctl==2.1.0
    - torch==1.7.1
    - torchfile==0.1.0
    - tornado==6.1
    - tqdm==4.56.0
    - typing-extensions==3.7.4.3
    - umap-learn==0.5.0
    - unidecode==1.1.2
    - urllib3==1.26.3
    - visdom==0.1.8.9
    - websocket-client==0.57.0
    - werkzeug==1.0.1
    - wrapt==1.12.1
    - zipp==3.4.0

#### Data from environment.yml of wav2lip : 

dependencies:
  - certifi=2020.12.5
  - python=3.6.12
  - setuptools=52.0.0
  - sqlite=3.33.0
  - vc=14.2
  - vs2015_runtime=14.27.29016
  - wheel=0.36.2
  - wincertstore=0.2
  - zlib=1.2.11
  - pip:
    - audioread==2.1.9
    - cffi==1.14.4
    - decorator==4.4.2
    - joblib==1.0.0
    - librosa==0.7.0
    - llvmlite==0.31.0
    - numba==0.48.0
    - numpy==1.17.1
    - opencv-contrib-python==4.5.1.48
    - opencv-python==4.1.0.25
    - pillow==8.1.0
    - pip==21.0
    - pycparser==2.20
    - pymongo==3.11.2
    - resampy==0.2.2
    - scikit-learn==0.24.1
    - scipy==1.5.4
    - six==1.15.0
    - soundfile==0.10.3.post1
    - threadpoolctl==2.1.0
    - torch==1.7.1
    - torchvision==0.3.0
    - tqdm==4.45.0