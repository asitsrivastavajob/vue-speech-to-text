<template>
    <div>
      <h1>Speech to Text</h1>
      <button @click="startRecognition" :disabled="isRecognitionSupported === false">Start Listening</button>
      <p v-if="isRecognitionSupported === false">Speech recognition is not supported in this browser.</p>
      <p v-else>{{ recognizedText }}</p>
    </div>
  </template>
  
  <script>
  import { ref, watchEffect } from 'vue';
  
  export default {
    name: 'SpeechToText',
    setup() {
      const recognizedText = ref('');
      const isRecognitionSupported = ref(false);
  
      const startRecognition = () => {
        if (isRecognitionSupported.value) {
          const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
          recognition.lang = 'en-US';
  
          recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            recognizedText.value = result;
            console.log(recognizedText.value)
          };
  
          recognition.start();
        }
      };
  
      // Check if speech recognition is supported in the current browser
      watchEffect(() => {
        isRecognitionSupported.value =
          'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
      });
  
      return { recognizedText, startRecognition, isRecognitionSupported };
    },
  };
  </script>
  