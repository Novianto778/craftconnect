import useAuth from '@/shared/hooks/useAuth';
import { User, UserChat } from 'typings';
import Search from '../Search/Search';
import useChats from '../useChats';
import UserListItem from '../UserListItem/UserListItem';

type Props = {};

const Sidebar = (props: Props) => {
    const { currentUser } = useAuth();
    const { chats, selectedUser, handleSelect, loading, query, filteredChat } =
        useChats();
    const currentChats = query !== '' ? filteredChat : chats;

    return (
        <div className="fixed top-[60px] w-inherit px-2">
            <Search />

            <div className="user-list mt-4 flex h-screen flex-col gap-y-2 overflow-y-auto bg-white px-2 duration-300">
                {currentChats.length > 0 &&
                    !loading &&
                    currentChats
                        .sort((a, b) => b[1].date?.seconds - a[1].date?.seconds)
                        .map((user: UserChat) => {
                            return (
                                <UserListItem
                                    key={user[0]}
                                    user={user[1]?.userInfo as User}
                                    isSelected={
                                        selectedUser?.uid ===
                                        user[0].split(currentUser?.uid!)[0]
                                    }
                                    onSelect={handleSelect}
                                    lastMessage={user[1]?.lastMessage}
                                />
                            );
                        })}
                {loading && <p>Loading...</p>}
                {!loading && !Object.entries(chats).length && (
                    <p>User not found</p>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
