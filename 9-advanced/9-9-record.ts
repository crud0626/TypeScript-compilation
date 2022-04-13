{
    // Record 타입, <key, type>형식으로 여러개를 묶을 수 있다.
    type PageInfo = {
        title: string;
    };
    type Page = 'home' | 'about' | 'contact';

    const nav: Record<Page, PageInfo> = {
        home: { title: 'Home' },
        about: { title: 'About' },
        contact: { title: 'Contact' }
    };

    type Product = 'cat' | 'dog';
    // Capitalize, 첫 번째 글자를 대문자로 변환해서 사용하는 타입
    type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
}