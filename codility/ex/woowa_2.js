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
      return "movies";
    default:
      return "other";
  }
}
function soloution(S) {
  let result = {
    music: 0,
    images: 0,
    movies: 0,
    other: 0,
  };
  let filelist = [];
  if (S.indexOf("\n") > -1) {
    filelist = S.split("\n");
  }
  if (filelist.length < 1) {
    return "";
  }
  filelist.forEach((item) => {
    let nameAndsize;
    if (item.indexOf(" ") > -1) {
      nameAndsize = item.split(" ");
    }
    if (nameAndsize && nameAndsize.length > 1 && nameAndsize[0].indexOf(".")) {
      let size = parseInt(nameAndsize[1].replace("b", ""));
      let name = nameAndsize[0].split(".");
      let key = getFileTypeFromExtension(name[name.length - 1]);
      result[key] += size;
    }
  });

  let stringResult = "";
  for (let key in result) {
    stringResult += `${key} ${result[key]}b\n`;
  }
  return stringResult;
}
console.log(
  soloution(
    "my.song.mp3 11b\ngreatSong.flac 1000b\nnot3.txt 5b\nvideo.mp4 200b\ngame.exe 100b\nmov!e.mkv 10000b"
  )
);
