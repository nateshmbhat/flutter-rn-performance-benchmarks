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
- Memory: 
	- iPhone8 : 49 MB
	- iPhone15 : 94 MB
- CPU: 
	- iPhone 8 : 50-60% 
	- iPhone 15 : 23%
- No visible janks or framedrops
- Archive size: 71.2 MB (Build Time : 33 seconds)

### React Native:

- Memory: 
	- iPhone 8 : 1.2 GB (Low Memory warning and eventual crash)
	- iPhone 15 : 1.38 GB (No crash)
- CPU : 
	- iPhone 8 : 135-140% (Eventual crash after about few seconds)
	- iPhone 15 : 200-300% for first 3.5 seconds then reduced to 50-60% 
- Severe janks, framedrops and eventual crash in iPhone 8. Only initial janks in iPhone 15
- Archive size: 112.3 MB (Build Time : 317 seconds)
 