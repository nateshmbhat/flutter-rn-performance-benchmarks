import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Flutter Lottie Demo',
      home: MyHomePage(title: 'Flutter Lottie Demo'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        backgroundColor: Colors.blue[700],
        body: GridView.builder(
            itemCount: lottieFiles.length,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 5),
            itemBuilder: (context, index) {
              var assetName = lottieFiles[index];
              return LottieItem(
                assetName: assetName,
              );
            }));
  }
}

class LottieItem extends StatelessWidget {
  final String assetName;

  const LottieItem({super.key, required this.assetName});

  @override
  Widget build(BuildContext context) {
    return Lottie.asset(assetName);
  }
}

final lottieFiles = [
  'assets/Mobilo/A.json',
  'assets/Mobilo/B.json',
  'assets/Mobilo/C.json',
  'assets/Mobilo/D.json',
  'assets/Mobilo/E.json',
  'assets/Mobilo/F.json',
  'assets/Mobilo/G.json',
  'assets/Mobilo/H.json',
  'assets/Mobilo/I.json',
  'assets/Mobilo/J.json',
  'assets/Mobilo/K.json',
  'assets/Mobilo/L.json',
  'assets/Mobilo/M.json',
  'assets/Mobilo/N.json',
  'assets/Mobilo/O.json',
  'assets/Mobilo/P.json',
  'assets/Mobilo/Q.json',
  'assets/Mobilo/R.json',
  'assets/Mobilo/S.json',
  'assets/Mobilo/T.json',
  'assets/Mobilo/U.json',
  'assets/Mobilo/V.json',
  'assets/Mobilo/W.json',
  'assets/Mobilo/X.json',
  'assets/Mobilo/Y.json',
  'assets/Mobilo/Z.json',
  'assets/Mobilo/Apostrophe.json',
  'assets/Mobilo/Colon.json',
  'assets/Mobilo/Comma.json',
  'assets/Mobilo/BlinkingCursor.json',
  'assets/Mobilo/yoga_carpet.json',
  'assets/Mobilo/books.json',
  'assets/Mobilo/bitcoin_to_the_moon.json',
  'assets/Mobilo/powerupp_app_onboard.json',
  'assets/Mobilo/loading_copy.json',
];
