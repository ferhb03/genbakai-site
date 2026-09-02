alter table public.resource_requests
  add column if not exists email_status text not null default 'pending',
  add column if not exists email_provider_id text,
  add column if not exists email_sent_at timestamptz,
  add column if not exists email_error text;

comment on column public.resource_requests.email_status is
  'Estado del envío transaccional del recurso: pending, sent o failed.';
