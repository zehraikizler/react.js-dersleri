// function User(props) {
//     return (
//         <h1>
//             {
//                 props.isLoggedIn ? `${props.name} ${props.surname} (${props.name})` : 'Giriş yapmadınız!'
//             }
//         </h1>
//     );
// }

// her seferinde props yazmak yerine props'un bir obje olduğunu biliyoruz. Props altında name surname... yazarak değerlerimize ulaşırız

import PropTypes from 'prop-types';

function User({name, surname, age, friends, isLoggedIn, address}) {
    return (
        <div>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname} (${age})` : 'Giriş Yapmadınız'
                }
            </h1>

            {address.title} {address.zip}

            <br />
            <br />

            {
                friends.map((friend) => {
                    return <div key={friend.id}>{friend.name}</div>
                })
            }
        </div>
    );
}

// Uygulamanız büyüdükçe, tip kontrolü ile birçok hata yakalayabiliriz. 

// isRequired => Gerekli

// oneOfType ile birden fazla veri tipi kabul edebiliriz.

// shape'in kullanımı tanımlı olan alanımızda yer alan objelere tip atamak için kullanıyoruz.

// 'defaultProps' default kullanarak ataması yapılmamış proplara atama yapabiliriz.

User.propTypes = {
    name: PropTypes.string.isRequired, // name'in zorunlu alan olması gerektiği belirtiliyor.
    surname: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    friends: PropTypes.array,
    isLoggedIn: PropTypes.bool,
    address: PropTypes.shape(
        {
            title: PropTypes.string,
            zip: PropTypes.number,
        }
    ),
};

export default User;