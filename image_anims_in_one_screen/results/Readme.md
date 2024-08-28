# Bulk image animations benchmark results 

## Android 

### Flutter:

- FPS: 58–60
- APK size: 11.6 MB (19.6 seconds to build)
- CPU: 8%
- Memory: 128–135 MB
- Dart Heap: 13.4 MB


### React Native:

- FPS: 58–60 (with occasional drops)
- APK size: 21 MB (20 seconds to build)
- Memory: 380–396 MB
- CPU: 12–16%

 
## IOS

### Flutter:
- Memory: 47 MB
- CPU: Varies between 60-90%
- No janks and framedrops

### React Native:

- Memory: 1.2 GB (Low Memory warning and eventual crash)
- CPU : 135-140% (Eventual crash after about 15 seconds)
- Severe janks and framedrops and eventual crash
 