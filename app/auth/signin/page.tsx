import { LoginForm } from '@/components/loginForm'
import { Modal } from '@/components/modal'

interface IProps {
  searchParams: Record<string, string> | null | undefined
}

export default function Signin({ searchParams }: IProps) {
  const showModal = searchParams?.modal

  return (
    <>
      <main className="flex min-h-screen items-center justify-center p-4 laptop:p-4 2xl:p-24 bg-mainBlue">
        <LoginForm />
      </main>

      {showModal && <Modal />}
    </>
  )
}
