# ListView benchmark results 


## Android 

### Flutter:

- FPS: 60 (no jank)
- Dart heap memory usage: 7–8 MB
- APK size: 16.8 MB (7.6 seconds to build)
- Memory: 120–130 MB (remained same when scrolling)
- CPU: 5–8% (remained same when scrolling)
- No jank or framedrops on rapid scrolling

### React Native:

- APK size: 22.3 MB (23 seconds to build)
- Memory:
	- **Using builtin Animated API** : 160 MB (when not scrolling), 180–190 MB (scrolling)
	- **Using Reanimated v3** : 112 - 115 MB (when not scrolling), 200–205 MB (on scrolling) 
- CPU: 11–13% (when not scrolling), spiking to 25–30% (scrolling)
- Rare framedrops and blank items while scrolling rapidly
- FPS: 50–55 (noticeable jank)
 

## IOS

### Flutter:

- Memory: 48 MB (remained same when scrolling)
- CPU: 40-60% (remained same when scrolling)
- No jank or framedrops on rapid scrolling

### React Native:

- Memory: 1.05 GB and drops to 453 MB on scrolling.
- CPU: 120–140% for first 5 seconds, then drops to ~50% when not scrolling. Spikes to 140-150% on scrolling.
- No framedrops but sometimes abruptly stops the scrolling when scrolled rapidly (user has to scroll again)
 