import { templateAPI } from "../../../Shared";
import { ReviewItem } from "../Model/ReviuwsType";

const data: ReviewItem[] = [
  {
    userName: "Blanca Brakus",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 4.8,
    date: "01 Year With Us",
    content:
      "Iste temporibus reiciendis. Sunt neque natus. Maxime nisi aspernatur aut molestias. Ab rerum expedita aut aspernatur repellat reiciendis odit harum architecto.",
    id: "1",
  },
  {
    userName: "Myra Marvin",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 5,
    date: "01 Year With Us",
    content:
      "Dolor ipsum repudiandae sapiente sunt in praesentium tempore. Fuga magni accusamus cupiditate consequatur repellat enim corporis. Ad reiciendis cum.\nVoluptas nemo dignissimos velit ad accusantium vitae quia. Magnam magnam atque voluptatibus dignissimos deserunt nobis sunt. Quod quos assumenda modi. Similique deleniti animi reprehenderit sunt.\nReprehenderit magni expedita velit quasi incidunt rerum. Alias odio voluptatibus corrupti repellendus iusto. Molestias placeat iure possimus unde consequatur. Minima nihil provident. Sunt incidunt deleniti voluptatum.",
    id: "2",
  },
  {
    userName: "Stacey Miller",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 3,
    date: "01 Year With Us",
    content:
      "Laudantium fuga amet id. Eos eum minima. Deserunt tempore eos debitis magnam consectetur. Veritatis fugiat eos. Facere ad ipsa placeat. Sint cum quos.",
    id: "3",
  },
  {
    userName: "Hubert Schmeler",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 2,
    date: "01 Year With Us",
    content:
      "Dolor ipsum repudiandae sapiente sunt in praesentium tempore. Fuga magni accusamus cupiditate consequatur repellat enim corporis. Ad reiciendis cum.\nVoluptas nemo dignissimos velit ad accusantium vitae quia. Magnam magnam atque voluptatibus dignissimos deserunt nobis sunt. Quod quos assumenda modi. Similique deleniti animi reprehenderit sunt.\nReprehenderit magni expedita velit quasi incidunt rerum. Alias odio voluptatibus corrupti repellendus iusto. Molestias placeat iure possimus unde consequatur. Minima nihil provident. Sunt incidunt deleniti voluptatum.",
    id: "4",
  },
  {
    userName: "Felicia Hills",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 3.5,
    date: "01 Year With Us",
    content: "debitis",
    id: "5",
  },
  {
    userName: "Tara Gutmann",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 5,
    date: "01 Year With Us",
    content:
      "Odit distinctio aliquid sequi odit debitis ipsa beatae sunt. Eius voluptatum ipsam numquam quo reiciendis reprehenderit quasi iure. Ut illo numquam consectetur natus facilis ipsam expedita voluptates. Odio perferendis facere quidem libero architecto. Recusandae provident corporis repellat ipsa minima suscipit. Exercitationem possimus repellat.",
    id: "6",
  },
  {
    userName: "Rufus Schaden",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 4.7,
    date: "01 Year With Us",
    content:
      "Laudantium fuga amet id. Eos eum minima. Deserunt tempore eos debitis magnam consectetur. Veritatis fugiat eos. Facere ad ipsa placeat. Sint cum quos.",
    id: "7",
  },
  {
    userName: "Ross Gerhold",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 4.8,
    date: "01 Year With Us",
    content:
      "Voluptatem dignissimos quas in tempore nihil officia tempora. Amet nobis enim laudantium laboriosam deleniti optio doloremque. Id incidunt repellendus rem maxime architecto aliquid fugiat rem minima. Assumenda quod culpa perspiciatis consequatur cum. Quasi alias animi expedita debitis. Molestiae dolore vel ducimus consequuntur eaque nulla minus porro.",
    id: "8",
  },
  {
    userName: "Lynda Morar",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 4.9,
    date: "01 Year With Us",
    content:
      "Eveniet omnis aperiam non. Debitis voluptatem velit esse autem. Esse omnis tenetur pariatur. Eaque sed quod adipisci vero sapiente repellendus. A dolorum commodi sed.",
    id: "9",
  },
  {
    userName: "Robin Franey",
    img: "https://live.verstaem.online/eatly/src/img/review/1.png",
    raiting: 4,
    date: "01 Year With Us",
    content:
      "Ad facere itaque aspernatur.\nDistinctio architecto optio ipsum consequatur delectus explicabo incidunt.\nCumque quia suscipit modi facilis.\nRepellendus vero omnis rem consectetur eius nihil quae sit.\nDignissimos quidem quam minima blanditiis minus commodi nam velit.",
    id: "10",
  },
];

export const ReviewAPI = templateAPI<ReviewItem>(data);
