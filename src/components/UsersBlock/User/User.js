const User = ({user}) => {
    const {id, name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone, website, company: {name: companyName, catchPhrase, bs}} = user
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username {username}</p>
            <p>email: {email}</p>
            <p>address: [</p>
            <p>street {street}</p>
            <p>suite {suite}</p>
            <p>city: {city}</p>
            <p>zipcode: {zipcode}</p>
            <p>geo: (lat:{lat} lng{lng})]</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <p>Company Name: {companyName}</p>
            <p>catchPhrase: {catchPhrase}</p>
            <p>bs: {bs}</p>
        </div>
    );
};

export {User};
