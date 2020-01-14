
import faker from 'faker'

const getUsers = () => {
    const users = [];
    while (users.length < 100) {
        users.push({
            name: faker.name.firstName(),
            state: faker.address.state(),
            id: users.length,
            company: faker.company.companyName()
        })
    }
    return users
}

const getCompanies = () => {
    const companies = [];
    while (companies.length < 100) {
        companies.push ({
            name: faker.company.companyName(),
            state: faker.address.state(),
            Id: companies.length
        })
    }
    return companies;
}

const userList = getUsers();
const companyList = getCompanies();

const fakeData = {userList, companyList}
export default fakeData;