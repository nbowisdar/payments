import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gateway-api')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>This is Gateway page!</div>
}
