import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { trpc } from "../_trpc/client"

const Page = () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const { data, isLoading  } = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({success}) => {
            if (success) {
                // user is synced to the db
                router.push(origin ? `/${origin}`: '/dashboard')
            }
        }
    })
    console.log(data, isLoading)
}

export default Page