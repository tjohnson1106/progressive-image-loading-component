import React from "react";
import { Image, View, StyleSheet } from "react-native";

class ProgressiveImage extends Component {
  render() {
    const { thumbnailSource, source, style, ...props } = this.props;

    return (
      <View style={styles.container}>
        <Image {...props} source={thumbnailSource} style={style} />
        <Image {...props} source={source} style={[style.imageOverlay, style]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8"
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default ProgressiveImage;
