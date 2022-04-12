{
    // Pick type, 기존 타입 중 원하는 속성만 뽑아서 사용할 수 있다.
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    // Pick<기존type, 추출하고 싶은 속성>;
    type VideoMetadata = Pick<Video, 'id' | 'title'>;

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..'
        }
    }

    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'title'
        }
    }

    const lecture: Video = {
        id: "123",
        title: "lectrue one",
        url: "http",
        data: "data"
    }
    const lectrueMetadata = getVideoMetadata(lecture.id);
    console.log(lectrueMetadata);
}