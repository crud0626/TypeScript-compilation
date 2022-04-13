{
    // Omit type, 원하는 걸 빼는 유틸리티 타입
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    // Omit<기존type, 제외하고 싶은 속성>;
    type VideoMetadata = Omit<Video, 'url' | 'data'>;

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