function getFileTypeFromExtension(extension) {
  switch (extension) {
    case "mp3":
    case "aac":
    case "flac":
      return "music";
    case "jpg":
    case "bmp":
    case "gif":
      return "image";
    case "mp4":
    case "avi":
    case "mkv":
      return "movie";
    default:
      return "other";
  }
}
function solution(S) {
  let sizeSum = {
    music: 0,
    image: 0,
    movie: 0,
    other: 0,
  };
  let files = [];
  if (S.indexOf("\n") > -1) {
    files = S.split("\n");
  }
  if (files.length < 1) {
    return "";
  }
  files.forEach((item) => {
    let nameAndsize;
    if (item.indexOf(" ") > -1) {
      nameAndsize = item.split(" ");
    }
    if (
      nameAndsize &&
      nameAndsize.length > 1 &&
      nameAndsize[0].indexOf(".") > -1
    ) {
      const size = parseInt(nameAndsize[1].replace("b", ""));
      const name = nameAndsize[0].split(".");
      const key = getFileTypeFromExtension(name[name.length - 1]);
      sizeSum[key] += size;
    }
  });

  let result = "";
  for (let key in sizeSum) {
    result += `${key} ${sizeSum[key]}b\n`;
  }
  return result;
}

console.log(
  solution(
    "my.song.mp3 50b\ngreatSong.flac 1000b\nnot3.txt 5b\nvideo.mp4 200b\ngame.exe 100b\nmov!e.mkv 10000b\ntest.gif 200b"
  )
);
