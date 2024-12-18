<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword;

class CustomResetPasswordNotification extends ResetPassword
{
    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return MailMessage
     */
    public function toMail($notifiable): MailMessage
    {

        $fromAddress = 'noreply@SportNest.be';
        $fromName = 'SportNest';  

        return (new MailMessage)
            ->from($fromAddress, $fromName)
            ->subject('Reset Password Notification')
            ->greeting('Hello, ' . ($notifiable->name ?? 'user') . '!')
            ->line('You are receiving this email because we received a password reset request for your account.')
            ->action('Reset Password', url(route('password.reset', $this->token, false)))
            ->line('If you did not request a password reset, no further action is required.')
            ->salutation('Best regards, ' . config('app.name') . ' Team');
    }
}
