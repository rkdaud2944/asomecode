import subjects from '@/data/subjects';

export default {
    rows: [
        {
            id: 1,
            title: '어썸키트 정규과정',
            author: 'AsomeIT',
            created_at: '2020-01-01',
            views: 100,
            subjects: [1, 2],
        },
        {
            id: 2,
            title: '어썸봇 정규과정',
            author: 'AsomeIT',
            created_at: '2020-01-01',
            views: 100,
            subjects: [3],
        },
        {
            id: 3,
            title: '어썸카 정규과정',
            author: 'AsomeIT',
            created_at: '2020-01-01',
            views: 100,
            subjects: [4],
        },
        {
            id: 4,
            title: '목동초등학교 1학년 IoT 수업 과정',
            description: '',
            author: '목동초',
            created_at: '2020-01-01',
            views: 100,
            subjects: [1, 2, 3, 5],
        },
        {
            id: 5,
            title: '인공지능과 IoT',
            description: '',
            author: '인하대학교',
            created_at: '2020-01-01',
            views: 100,
            subjects: [1, 2, 6],
        },
        {
            id: 6,
            title: '피지컬 컴퓨팅의 기초',
            description: '',
            author: '강서고',
            created_at: '2020-01-01',
            views: 100,
            subjects: [1, 2, 7],
        },

    ],

    getSubjects(id) {
        const subjectSet = this.rows.find((subjectSet) => subjectSet.id == id);

        // id가 지정되지 않으면 기본 과목 목록을 반환
        if (!subjectSet) {
            return subjects.filter(subject => subject.author == "AsomeIT");
        }

        return subjects.filter((subject) => subjectSet.subjects.includes(subject.id));
    }
};